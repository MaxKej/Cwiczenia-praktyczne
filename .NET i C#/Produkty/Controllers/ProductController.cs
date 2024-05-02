using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Produkty.Data;
using Produkty.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Produkty.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController : ControllerBase
    {
        private readonly IDbContextFactory<ApplicationDbContext> _contextFactory;

        public ProductController(IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }

        [HttpPost("save")]
        public async Task<IActionResult> SaveProduct([FromBody] Product product)
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                context.Products.Add(product);
                await context.SaveChangesAsync();
            }
            return Ok();
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateProduct([FromBody] Product updatedProduct)
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                var existingProduct = await context.Products.FindAsync(updatedProduct.Id);

                if (existingProduct == null)
                {
                    return NotFound();
                }

                existingProduct.Name = updatedProduct.Name;
                existingProduct.Description = updatedProduct.Description;
                existingProduct.Price = updatedProduct.Price;

                await context.SaveChangesAsync();
            }

            return Ok();
        }


        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                var product = await context.Products.FindAsync(id);
                if (product == null)
                    return NotFound();

                context.Products.Remove(product);
                await context.SaveChangesAsync();
            }
            return Ok();
        }

        [HttpGet("get/{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                var product = await context.Products.FindAsync(id);
                if (product == null)
                    return NotFound();

                return product;
            }
        }

        [HttpGet("getAll")]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
        {
            using (var context = _contextFactory.CreateDbContext())
            {
                var products = await context.Products.ToListAsync();
                return products;
            }
        }
    }
}
