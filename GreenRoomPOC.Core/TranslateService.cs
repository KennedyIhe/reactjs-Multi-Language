using GreenRoomPOC.Core.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace GreenRoomPOC.Core
{
    public class TranslateService : ITranslateService
    {
        private const string key_var = "TRANSLATOR_TEXT_SUBSCRIPTION_KEY";
        private readonly string subscriptionKey = "";

        private const string endpoint_var = "TRANSLATOR_TEXT_ENDPOINT";
        private readonly string endpoint = "https://api-nam.cognitive.microsofttranslator.com";

        public TranslateService()
        {

        }

        public async Task<List<Translation>> Translate(string textToTranslate)
        {
           string route = "/translate?api-version=3.0&to=es&to=it&to=ja&to=fr";
           return await TranslateTextRequest(subscriptionKey, endpoint, route, textToTranslate);
        }

        private async Task<List<Translation>> TranslateTextRequest(string subscriptionKey, string endpoint, string route, string inputText)
        {
            var translations = new List<Translation>();
            object[] body = new object[] { new { Text = inputText } };
            var requestBody = JsonConvert.SerializeObject(body);

            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                request.Method = HttpMethod.Post;
                request.RequestUri = new Uri(endpoint + route);
                request.Content = new StringContent(requestBody, Encoding.UTF8, "application/json");
                request.Headers.Add("Ocp-Apim-Subscription-Key", subscriptionKey);
                HttpResponseMessage response = await client.SendAsync(request).ConfigureAwait(false);
                string result = await response.Content.ReadAsStringAsync();
                TranslationResult[] deserializedOutput = JsonConvert.DeserializeObject<TranslationResult[]>(result);
                foreach (TranslationResult o in deserializedOutput)
                {
                    translations.AddRange(o.Translations);
                }
            }
            return translations;

        }
    }
}
