document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById('submitButton');
    
    submitButton.addEventListener('click', function() {
        // Ambil nilai dari input field
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var gender = document.getElementById('gender').value;
        var content = document.querySelector('input[name="content"]:checked').value;
        var interests = document.querySelectorAll('input[name="interests"]:checked');
        var music = document.getElementById('music').value;
        var date = document.getElementById('date').value;
        var comments = document.getElementById('comments').value;
        
        // Buat pesan alert sesuai dengan data yang diisi
        var message = "Nama: " + name + "\n" +
                      "Email: " + email + "\n" +
                      "Jenis Kelamin: " + gender + "\n" +
                      "Jenis Konten Favorit: " + content + "\n" +
                      "Minat: ";
        interests.forEach(function(interest) {
            message += interest.value + ", ";
        });
        message = message.slice(0, -2) + "\n" + // Untuk menghapus koma terakhir
                  "Judul Musik Favorit: " + music + "\n" +
                  "Tanggal Lahir: " + date + "\n" +
                  "Komentar: " + comments;
        
        // Tampilkan pesan alert
        alert(message);
    });
});
