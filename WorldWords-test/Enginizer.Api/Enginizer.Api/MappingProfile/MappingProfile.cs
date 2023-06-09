﻿using AutoMapper;
using Enginizer.Api.Core.Models.ViewModels.User;
using Enginizer.Api.Core.Models.ViewModels.Word;
using Enginizer.Api.Domain.Domain.Entities;

namespace Enginizer.Api.MappingProfile
{
    public class MappingProfile : Profile
    { 
        public MappingProfile()
        {
            CreateMap<User, UserViewModel>();
            CreateMap<UserViewModel, User>();

            CreateMap<Word, WordViewModel>();
            CreateMap<WordViewModel, Word>();
        }
    }
}
