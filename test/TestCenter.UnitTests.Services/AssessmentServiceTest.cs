using Xunit;

namespace TestCenter.UnitTests.Services
{
  // see example explanation on xUnit.net website:
  // https://xunit.github.io/docs/getting-started-dotnet-core.html
  public class AssessmentServiceTest
  {
    [Fact]
    public void PassingTest()
    {
      Assert.Equal(4, Add(2, 2));
    }

    // [Fact]
    // public void FailingTest()
    // {
    //     Assert.Equal(5, Add(2, 2));
    // }

    int Add(int x, int y)
    {
      return x + y;
    }

    public void ShouldReturnTopAssessments()
    {
      Assert.Equal(4, Add(2, 2));
    }
  }
}
