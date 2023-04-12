namespace Enginizer.Api.Core.Models.ViewModels.User
{
    public class UserUpdateViewModel : UserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Points { get; set; }
    }
}
