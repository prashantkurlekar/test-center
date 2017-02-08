using System;
using System.Collections.Generic;

namespace TestCenter.Models
{
  public class Assessment
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string ShortName { get; set; }
    public string Description { get; set; }
    public List<string> Labels { get; set; }
    public List<Question> Questions { get; set; }

    public Assessment(Guid id, string name, string shortName = "", string description = "")
    {
      this.Id = id;
      this.Name = name;
      this.ShortName = shortName ?? name.Substring(0, 16);
      this.Description = description ?? name;
    }
  }
}
