using System;
namespace FactoryMethodPatternExample
{
    public class PdfDocument : Document
    {
        public void Open()
        {
            Console.WriteLine("PDF Document opened.");
        }
    }
}
