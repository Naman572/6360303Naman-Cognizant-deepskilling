using NUnit.Framework;
using NUnitCalculatorLib;

namespace NUnitCalculator.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private Calculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new Calculator();
        }

        [TearDown]
        public void TearDown()
        {
            calculator = null;
        }

        [TestCase(2, 3, 5)]
        [TestCase(-1, 1, 0)]
        [TestCase(0, 0, 0)]
        public void Add_WhenCalled_ReturnsCorrectSum(int a, int b, int expected)
        {
            int result = calculator.Add(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }
    }
}
