$(document)
.ready(function() {
  $('.ui.basic.modal')
  .modal({
    blurring: true
  })
  .modal('attach events','.registration.item','show')
  ;
  $('.ui.qna.modal')
  .modal({
    blurring: true
  })
  .modal('attach events','.qna.item','show')
  ;
  $('.ui.sidebar')
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('attach events','#right-sidebar-toggle')
  ;
  $('.ui.accordion')
  .accordion({
    selector: {
      trigger: '.title .icon'
    }
  })
  ;
  $('#adduser')
  .form({
    inline : true,
    fields: {
      TeamName : {
        identifier: 'TeamName',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your team name'
        },
        {
          type   : 'regExp[/^[a-zA-Z0-9_-]+$/]',
          prompt : 'Team name should be english, number, - and _'
        }
        ]
      },
      Name1: {
        identifier: 'Name1',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
        ]
      },
      Student_ID1: {
        identifier: 'Student_ID1',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a s_id'
        },
        {
          type   : 'exactLength[10]',
          prompt : 'Student_ID must be {ruleValue} characters'
        },
        {
          type   : 'regExp[/^[0-9]*$/]',
          prompt : 'Student_ID must be a numberic type'
        }
        ]
      },
      Email1: {
        identifier: 'Email1',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter an email'
        },
        {
          type   : 'email',
          prompt : 'Please enter a valid email address'
        }
        ]
      },
      Phone_Num1: {
        identifier: 'Phone_Num1',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a phone number'
        },
        {
          type   : 'regExp[(010)([ .-]?)([0-9]{4})([ .-]?)([0-9]{4})]',
          prompt : 'Ex)010 1010 1010'
        }
        ]
      },
      Department1: {
        identifier: 'Department1',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your department'
        }
        ]
      },
      Name2: {
        identifier: 'Name2',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
        ]
      },
      Student_ID2: {
        identifier: 'Student_ID2',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a s_id'
        },
        {
          type   : 'exactLength[10]',
          prompt : 'Student_ID must be {ruleValue} characters'
        },
        {
          type   : 'regExp[/^[0-9]*$/]',
          prompt : 'Student_ID must be a numberic type'
        }
        ]
      },
      Email2: {
        identifier: 'Email2',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter an email'
        },
        {
          type   : 'email',
          prompt : 'Please enter a valid email address'
        }
        ]
      },
      Phone_Num2: {
        identifier: 'Phone_Num2',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a phone number'
        },
        {
          type   : 'regExp[(010)([ .-]?)([0-9]{4})([ .-]?)([0-9]{4})]',
          prompt : 'Ex)010 1010 1010'
        }
        ]
      },
      Department2: {
        identifier: 'Department2',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your department'
        }
        ]
      },
      Name3: {
        identifier: 'Name3',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        }
        ]
      },
      Student_ID3: {
        identifier: 'Student_ID3',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a s_id'
        },
        {
          type   : 'exactLength[10]',
          prompt : 'Student_ID must be {ruleValue} characters'
        },
        {
          type   : 'regExp[/^[0-9]*$/]',
          prompt : 'Student_ID must be a numberic type'
        }
        ]
      },
      Email3: {
        identifier: 'Email3',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter an email'
        },
        {
          type   : 'email',
          prompt : 'Please enter a valid email address'
        }
        ]
      },
      Phone_Num3: {
        identifier: 'Phone_Num3',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a phone number'
        },
        {
          type   : 'regExp[(010)([ .-]?)([0-9]{4})([ .-]?)([0-9]{4})]',
          prompt : 'Ex)010 1010 1010'
        }
        ]
      },
      Department3: {
        identifier: 'Department3',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your department'
        }
        ]
      },
      Terms: {
        identifier: 'Terms',
        rules: [
        {
          type   : 'checked',
          prompt : 'You must agree to the terms and conditions'
        }
        ]
      }
    },
    onSuccess:function(event){
      event.preventDefault();
      var isPrime = $('#prime')[0].checked;
      $('#submitButton').attr('class',"ui disabled basic inverted right floated submit button");
      if(isPrime){
        $.ajax({
          type: 'POST',
          url: 'https://script.google.com/macros/s/AKfycbwp-nkvYWAiIr5GrSarRPeR46qXBZrDm3fOgQTQYSPPi7r1Qhs/exec',
          data: {
            TeamName : $('.ui.form').form('get field', 'TeamName').val(),
            Name1 : $('.ui.form').form('get field', 'Name1').val(),
            Student_ID1 : $('.ui.form').form('get field', 'Student_ID1').val(),
            Email1 : $('.ui.form').form('get field', 'Email1').val(),
            Phone_Num1 : $('.ui.form').form('get field', 'Phone_Num1').val(),
            Department1 : $('.ui.form').form('get field', 'Department1').val()
          },
          success: function (transport) {
            alert("성공적으로 접수되었습니다!");
            $('#submitButton').attr('class',"ui basic inverted right floated submit button");
          }
        });
      }
      else{
        $.ajax({
          type: 'POST',
          url: 'https://script.google.com/macros/s/AKfycbySAgd3ya6nAJB-Dr2HChmTQD6tNc2X7okX1RAjgrXgXGCQb7s/exec',
          data: {
            TeamName : $('.ui.form').form('get field', 'TeamName').val(),
            Name1 : $('.ui.form').form('get field', 'Name1').val(),
            Student_ID1 : $('.ui.form').form('get field', 'Student_ID1').val(),
            Email1 : $('.ui.form').form('get field', 'Email1').val(),
            Phone_Num1 : $('.ui.form').form('get field', 'Phone_Num1').val(),
            Department1 : $('.ui.form').form('get field', 'Department1').val(),
            Name2 : $('.ui.form').form('get field', 'Name2').val(),
            Student_ID2 : $('.ui.form').form('get field', 'Student_ID2').val(),
            Email2 : $('.ui.form').form('get field', 'Email2').val(),
            Phone_Num2 : $('.ui.form').form('get field', 'Phone_Num2').val(),
            Department2 : $('.ui.form').form('get field', 'Department2').val(),
            Name3 : $('.ui.form').form('get field', 'Name3').val(),
            Student_ID3 : $('.ui.form').form('get field', 'Student_ID3').val(),
            Email3 : $('.ui.form').form('get field', 'Email3').val(),
            Phone_Num3 : $('.ui.form').form('get field', 'Phone_Num3').val(),
            Department3 : $('.ui.form').form('get field', 'Department3').val()
          },
          success: function (transport) {
            alert("성공적으로 접수되었습니다!");
            $('#submitButton').attr('class',"ui basic inverted right floated submit button");
          }
        });

      }
    }
  });
  $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('attach events','#right-sidebar-toggle')
    ;
});
