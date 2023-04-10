using Enginizer.Api.Core.Models.ViewModels.Word;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enginizer.Api.Core.Contracts
{
    public interface IWordService
    {
        Task<WordViewModel> GetWordById(int id);
        Task<int> AddWordASync(WordViewModel word);
        Task<WordViewModel> GetRandomWordAsync();
    }
}
