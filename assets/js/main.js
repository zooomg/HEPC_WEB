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
      State1: {
        identifier: 'State1',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please select a state'
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
      State2: {
        identifier: 'State2',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please select a state'
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
      State3: {
        identifier: 'State3',
        rules: [
        {
          type   : 'empty',
          prompt : 'Please select a state'
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
  var formData = $('.ui.form').serialize();
      $.ajax({
        type: 'POST',
        url: 'register.php',
        data: {
          TeamName : $('.ui.form').form('get field', 'TeamName').val(),
          Name1 : $('.ui.form').form('get field', 'Name1').val(),
          Student_ID1 : $('.ui.form').form('get field', 'Student_ID1').val(),
          Email1 : $('.ui.form').form('get field', 'Email1').val(),
          Phone_Num1 : $('.ui.form').form('get field', 'Phone_Num1').val(),
          State1 : $('.ui.form').form('get field', 'State1').val(),
          Department1 : $('.ui.form').form('get field', 'Department1').val(),
          Name2 : $('.ui.form').form('get field', 'Name2').val(),
          Student_ID2 : $('.ui.form').form('get field', 'Student_ID2').val(),
          Email2 : $('.ui.form').form('get field', 'Email2').val(),
          Phone_Num2 : $('.ui.form').form('get field', 'Phone_Num2').val(),
          State2 : $('.ui.form').form('get field', 'State2').val(),
          Department2 : $('.ui.form').form('get field', 'Department2').val(),
          Name3 : $('.ui.form').form('get field', 'Name3').val(),
          Student_ID3 : $('.ui.form').form('get field', 'Student_ID3').val(),
          Email3 : $('.ui.form').form('get field', 'Email3').val(),
          Phone_Num3 : $('.ui.form').form('get field', 'Phone_Num3').val(),
          State3 : $('.ui.form').form('get field', 'State3').val(),
          Department3 : $('.ui.form').form('get field', 'Department3').val()
        },
        success: function (transport) {
          alert(transport);
        }
      });
    }
  });
  $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('attach events','#right-sidebar-toggle')
    ;
});