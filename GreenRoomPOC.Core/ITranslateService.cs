using GreenRoomPOC.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GreenRoomPOC.Core
{
    public interface ITranslateService
    {
        Task<List<Translation>> Translate(string textToTranslate);
    }
}
