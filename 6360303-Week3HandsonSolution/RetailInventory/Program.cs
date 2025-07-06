using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RetailInventory.Models;

namespace RetailInventory
{
    class Program
    {
        static async Task Main(string[] args)
        {
            using var context = new AppDbContext();

            //  Filter products with price > 1000 and sort descending
            var filtered = await context.Products
                .Where(p => p.Price > 1000)
                .OrderByDescending(p => p.Price)
                .ToListAsync();

            Console.WriteLine("Filtered & Sorted Products (Price > ₹1000):");
            foreach (var p in filtered)
            {
                Console.WriteLine($"{p.Name} - ₹{p.Price}");
            }

            //  Project into DTO (anonymous object)
            var productDTOs = await context.Products
                .Select(p => new { p.Name, p.Price })
                .ToListAsync();

            Console.WriteLine("\nProduct DTOs:");
            foreach (var dto in productDTOs)
            {
                Console.WriteLine($"{dto.Name} - ₹{dto.Price}");
            }
        }
    }
}

