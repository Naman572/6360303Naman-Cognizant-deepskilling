namespace FinancialForecastingExample
{
    public static class Forecast
    {
        public static double CalculateForecast(int month, double baseValue)
        {
            if (month == 1)
                return baseValue;
            return 1.05 * CalculateForecast(month - 1, baseValue);
        }
    }
}
