using System;
namespace FinancialForecastingExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the number of months to forecast:");
            int months = int.Parse(Console.ReadLine());

            Console.WriteLine("Enter base value for month 1:");
            double baseValue = double.Parse(Console.ReadLine());

            double result = Forecast.CalculateForecast(months, baseValue);
            Console.WriteLine($"Forecasted value for month {months}: {result}");
        }
    }
}
