using NUnit.Framework;
using Moq;
using MailSenderLib;

namespace MailSender.Tests
{
    [TestFixture]
    public class MailSenderTests
    {
        private CustomerComm customerComm;
        private Mock<IMailSender> mockMailSender;

        [OneTimeSetUp]
        public void Setup()
        {
            mockMailSender = new Mock<IMailSender>();
            mockMailSender.Setup(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>())).Returns(true);
            customerComm = new CustomerComm(mockMailSender.Object);
        }

        [Test]
        public void SendMailToCustomer_ShouldReturnTrue()
        {
            bool result = customerComm.SendMailToCustomer();
            Assert.That(result, Is.True);
        }
    }
}
