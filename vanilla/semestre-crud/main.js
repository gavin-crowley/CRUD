document.getElementById("form").addEventListener("submit", e => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  createUser(name, email);
  e.preventDefault();
});

var users = [];

function createUser(name, email) {
  var user = {
    name: name,
    email: email
  };
  users.push(user);
  readUser();
  document.getElementById('form').reset();
}


function readUser() {
  var userhtml = document.getElementById('user');
  userhtml.innerHTML = '';
  for (var i = 0; i < users.length; i++) {
    userhtml.innerHTML += `<div class="black">
    <p>NAME: ${users[i].name}</p>
    <p>EMAIL: ${users[i].email}</p><button class="edit" onClick="editUser('${i}')">Edit</button>
    <button class="remove" onClick="deleteUser('${i}')">Delete</button>
    </div>`
  }
}

function deleteUser(i) {
  users.splice(i, 1);
  readUser();
}

function editUser(index) {
  var userhtml = document.getElementById('user');
  userhtml.innerHTML = '';
  for (var i = 0; i < users.length; i++) {
    if (i == index) {
      userhtml.innerHTML += `<div class="red">
      NAME: <input id="input2name" placeholder="${users[i].name}"><br><br>
      EMAIL: <input id="input2email" placeholder="${users[i].email}"><br><br>
      <button class="edit" onClick="updateUser('${i}')">Update</button><button
      class="remove" onClick="readUser()">Cancel</button>
      </div>`
    } else {
      userhtml.innerHTML += `<div class="black"><p>NAME: ${users[i].name}
      </p><p>EMAIL: ${users[i].email}</p><button disabled class="edit" 
      onClick="editUser('${i}')">Edit</button><button disabled class="remove"
      onClick="deleteUser('${i}')">Delete</button>
      </div>`
    }
  }
}

function updateUser(index) {
  var updatename = document.getElementById('input2name').value;
  var updatemail = document.getElementById('input2email').value;
  if (updatename === '' || updatemail === '') {
    alert("INCOMPLETE");
  } else {
    users[index].name = updatename;
    users[index].email = updatemail;
    readUser();
  }
}
