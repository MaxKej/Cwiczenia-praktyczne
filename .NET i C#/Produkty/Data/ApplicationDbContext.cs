using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Produkty.Models;
using System;

namespace Produkty.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>().HasData(
            new Product
            {
                Id = 1,
                Name = "Laptop",
                Description = "Laptop Lenovo",
                Price = 2000.0
            },
            new Product
            {
                Id = 2,
                Name = "Drukarka",
                Description = "Drukarka Brother",
                Price = 1000.0
            },
            new Product
            {
                Id = 3,
                Name = "Słuchawki",
                Description = "Słuchawki Logitech",
                Price = 100.0
            }
        );

            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole { Name = "User", NormalizedName = "USER", Id = Guid.NewGuid().ToString(), ConcurrencyStamp = Guid.NewGuid().ToString() });
            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole { Name = "Employee", NormalizedName = "EMPLOYEE", Id = Guid.NewGuid().ToString(), ConcurrencyStamp = Guid.NewGuid().ToString() });
            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole { Name = "Admin", NormalizedName = "ADMIN", Id = Guid.NewGuid().ToString(), ConcurrencyStamp = Guid.NewGuid().ToString() });
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext(new DbContextOptionsBuilder<ApplicationDbContext>().Options);
        }
    }
}
