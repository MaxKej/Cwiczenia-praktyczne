using Microsoft.EntityFrameworkCore;
using Produkty.Data;
using Produkty.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Abstract;

namespace Repository.Concrete
{
    public class ProductRepository : BaseRepository, IProductRepository
    {
        public ProductRepository(ApplicationDbContext context) : base(context)
        {
        }

        public async Task<Product> GetProductAsync(int id)
        {
            return await Context.Products.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Product>> GetAllProductsAsync()
        {
            return await Context.Products.ToListAsync();
        }

        public async Task<bool> SaveProductAsync(Product product)
        {
            if (product == null)
                return false;

            Context.Entry(product).State = product.Id == default(int) ? EntityState.Added : EntityState.Modified;

            try
            {
                await Context.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> UpdateProductAsync(Product updatedProduct)
        {
            if (updatedProduct == null)
                return false;

            var existingProduct = await Context.Products.FindAsync(updatedProduct.Id);

            if (existingProduct == null)
                return false;

            existingProduct.Name = updatedProduct.Name;
            existingProduct.Description = updatedProduct.Description;
            existingProduct.Price = updatedProduct.Price;

            try
            {
                await Context.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }


        public async Task<bool> DeleteProductAsync(int id)
        {
            var activity = await GetProductAsync(id);
            if (activity == null)
                return true;

            Context.Products.Remove(activity);

            try
            {
                await Context.SaveChangesAsync();
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }

        
    }
}
