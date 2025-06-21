using System.Collections.Generic;
namespace EcommerceSearchExample
{
    public static class Search
    {
        public static int LinearSearch(List<Product> products, int id)
        {
            for (int i = 0; i < products.Count; i++)
            {
                if (products[i].ProductId == id)
                    return i;
            }
            return -1;
        }

        public static int BinarySearch(List<Product> products, int id)
        {
            int left = 0, right = products.Count - 1;
            while (left <= right)
            {
                int mid = left + (right - left) / 2;
                if (products[mid].ProductId == id)
                    return mid;
                if (products[mid].ProductId < id)
                    left = mid + 1;
                else
                    right = mid - 1;
            }
            return -1;
        }
    }
}
