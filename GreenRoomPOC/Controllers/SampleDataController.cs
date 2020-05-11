using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GreenRoomPOC.Core;
using GreenRoomPOC.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace GreenRoomPOC.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private readonly ITranslateService _translateService;
        public SampleDataController(ITranslateService translateService)
        {
            _translateService = translateService;
        }

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpPost("translate")]
        public async Task<List<Translation>> Translate([FromBody] TranslateRequest model)
        {
            var result = new List<Translation>();
            try
            {
                if (model != null && !string.IsNullOrWhiteSpace(model.Text))
                    result = await _translateService.Translate(model.Text);
            }
            catch(Exception ex)
            {
                //log error
                Console.WriteLine(ex);
            }
            return result;
        }

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
