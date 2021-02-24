<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <title>Note Taker</title>
  </head>
  <body>
    <div class="container">
    <div class="jumbotron">
    <h2>Note App</h2>
    <form action="/addNotes" method="POST">
    <div class="form-group">
    <textarea class="form-control" type="text" name="newNote" id="newNote" placeholder="Add new Note"></textarea>
    <button class="btn btn-success" type="submit">Add Note</button>
    </div>
    </div>
    </form>
    <table class="table">
    <thead class="thead-dark">
    <tr>
    <th scope="col">#</th>
    <th scope="col">NOTES</th>
    <th scope="col">ACTION</th>
    </tr>
    </thead>
    </table>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </body>
</html>