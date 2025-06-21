using System;
namespace SingletonPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.GetInstance();
            logger1.Log("First log message");

            Logger logger2 = Logger.GetInstance();
            logger2.Log("Second log message");

            Console.WriteLine("Same instance? " + (logger1 == logger2));
        }
    }
}
