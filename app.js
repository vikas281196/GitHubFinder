// Instantiate Github class
const github = new GitHub();

// Instantiate UI class
const ui = new UI();

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listner
searchUser.addEventListener('keyup', e => {
    // Get input text
    userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert("User not found!", "alert alert-danger");
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })

    } else {
        // clear profile
        ui.clearProfile();
    }
});
