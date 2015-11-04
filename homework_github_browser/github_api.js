$(function(){
  console.log("jQuery working")
  $("#sub").click(function(){
    event.preventDefault()
    console.log("Button worked")
    userName = $(".username-field").val()

    $.ajax({
      url: ('http://api.github.com/users/'+userName),
      method: 'GET',
      success: function(data, status, xhr) {
        $('.user-info').empty()
        console.log("name: ", data["login"]);
        user = $("<div class='username'></div>");
        user.text(data["login"]);
        image = data["avatar_url"];
        avatarImage = $("<div class='avatar'><img src=" + image + "/></div>");
        repoUl = $('<ul></ul>');

        repos = $("<div class='repos'></div>");
        repos.text("The amount of public repos are: " + data["public_repos"]);
        gists = $("<div class='gists'></div>");
        gists.text("The amount of public gists are: " + data["public_gists"]);
        repoUl.text(data['repos_url'])
        repos.append(repoUl);


        repoUri = data['repos_url']
        $.ajax({
          url: repoUri,
          method: 'GET',
          success: function(data, status, xhr){
            for (i=0; i<data.length; i++){
              currentLi = $("<li></li>")
              liNameLinkDiv = $("<div class='reponame'></div>");
              makingLinkALink = $("<a href="+data[i]["html_url"]+">" + data[i]["name"] + "</a>");
              liNameLinkDiv.append(makingLinkALink);
              currentLi.append(liNameLinkDiv);
              repoUl.append(currentLi);
            }
          }
        })
        info = $(".user-info");
        info.append(user);
        info.append(avatarImage);
        info.append(repos);
        info.append(gists);
      }
    })

  })









})