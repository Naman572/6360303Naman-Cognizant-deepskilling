using System;
namespace FactoryMethodPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter document type (PDF / WORD / EXCEL):");
            string type = Console.ReadLine();

            Document doc = DocumentFactory.CreateDocument(type);
            if (doc != null)
            {
                doc.Open();
            }
            else
            {
                Console.WriteLine("Invalid document type.");
            }
        }
    }
}
