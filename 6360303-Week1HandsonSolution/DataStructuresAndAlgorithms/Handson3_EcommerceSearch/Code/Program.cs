using System;
using System.Collections.Generic;
namespace EcommerceSearchExample
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Product> products = new List<Product>
            {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shirt", "Clothing"),
                new Product(103, "Book", "Stationery"),
                new Product(104, "Phone", "Electronics"),
                new Product(105, "Shoes", "Footwear")
            };
           Console.WriteLine("Enter product ID to search:");
            int searchId = int.Parse(Console.ReadLine());
            int linearResult = Search.LinearSearch(products, searchId);
            Console.WriteLine(linearResult != -1 
                ? $"Linear Search: Product found at index {linearResult}" 
                : "Linear Search: Product not found");          
            products.Sort((p1, p2) => p1.ProductId.CompareTo(p2.ProductId));
            int binaryResult = Search.BinarySearch(products, searchId);
            Console.WriteLine(binaryResult != -1 
                ? $"Binary Search: Product found at index {binaryResult}" 
                : "Binary Search: Product not found");
        }
    }
}
