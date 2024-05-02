using Produkty.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Abstract
{
    public interface IProductRepository
    {
        Task<Product> GetProductAsync(int id);
        Task<List<Product>> GetAllProductsAsync();
        Task<bool> SaveProductAsync(Product booking);
        Task<bool> UpdateProductAsync(Product updatedProduct);
        Task<bool> DeleteProductAsync(int id);
    }
}
