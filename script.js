//your JS code here. If required.
document.getElementById("submit").addEventListener("click",(e)=>{
	e.preventDefault();
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	var rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert('Logged in as user.');	
});

        var existingButton = document.getElementById('existing');

        existingButton.addEventListener('click', function() {
            var username = localStorage.getItem('username');
			if(!!username){
				
            alert('Logged in as .');
			}
        });
    