namespace FactoryMethodPatternExample
{
    public class DocumentFactory
    {
        public static Document CreateDocument(string type)
        {
            switch (type.ToUpper())
            {
                case "PDF":
                    return new PdfDocument();
                case "WORD":
                    return new WordDocument();
                case "EXCEL":
                    return new ExcelDocument();
                default:
                    return null;
            }
        }
    }
}
