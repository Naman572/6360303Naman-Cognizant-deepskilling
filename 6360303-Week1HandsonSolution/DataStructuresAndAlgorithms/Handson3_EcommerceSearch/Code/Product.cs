namespace EcommerceSearchExample
{
    public class Product
    {
        public int ProductId { get; }
        public string ProductName { get; }
        public string Category { get; }

        public Product(int id, string name, string category)
        {
            ProductId = id;
            ProductName = name;
            Category = category;
        }
    }
}
