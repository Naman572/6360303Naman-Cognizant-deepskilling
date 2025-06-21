using System;
namespace FactoryMethodPatternExample
{
    public class ExcelDocument : Document
    {
        public void Open()
        {
            Console.WriteLine("Excel Document opened.");
        }
    }
}
