<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Settings" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Left Panel" sliding></f7-navbar>
            <f7-block inner>
              <p>Left panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>RemarkAll</f7-nav-center>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Remark All</f7-nav-center>
            </f7-navbar>
            <!-- Page Content -->
            <f7-messages>
                <f7-message v-for="message in messages"
                  :text="message.text"
                  :label="message.label"
                  :date="message.date"
                  :name="message.name"
                  :avatar="message.avatar"
                  :type="getType(message.uid)"
                  :day="message.day"
                  :time="message.time"
                  @click="onClick"
                  @click:text="onTextClick"
                  @click:name="onNameClick"
                  @click:avatar="onAvatarClick"
                ></f7-message>
              </f7-messages>
              <f7-messagebar placeholder="Message" send-link="Send" @submit="onSubmit"></f7-messagebar>          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

  </div>
</template>

<script>
var firebase = require('firebase')

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBd6O3eOcwX8Wm7DqK79JQG828SfIv6VC4",
    authDomain: "messages-287f3.firebaseapp.com",
    databaseURL: "https://messages-287f3.firebaseio.com",
    projectId: "messages-287f3",
    storageBucket: "messages-287f3.appspot.com",
    messagingSenderId: "436062979066"
  })
var db = firebaseApp.database()

export default {
    data: function () {
      return {
        name: 'Vladimir',
        avatar: 'path/to/avatar-1.jpg',
        uid: 'none'
      }
    },
    firebase: function(){
      return {
        messages: db.ref('/messages'),
      }
    },
    methods: {
      onClick: function (event) {
        console.log('message click');
        console.log(this.uid)
      },
      onAvatarClick: function () {
        console.log('avatar-click');
      },
      onTextClick: function () {
        console.log('text-click');
      },
      onNameClick: function () {
        console.log('name-click');
      },
      onSubmit: function (text, clear) {
        if (text.trim().length === 0) return;
        let newMsg = {
          // name: this.uid,
          // avatar: this.avatar,
          uid: this.uid,
          text: text,
          date: (function () {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            return hours + ':' + minutes;
          })()
        }
        this.$firebaseRefs.messages.push({
          ...newMsg // expand object
        })
        // Clear Message Bar
        clear();
      },
      getType: function(uid){
        return (uid==this.uid?'sent':'received')
      }
    },
    mounted: function(){
      var vm = this

      firebase.auth().signInAnonymously().catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode+errorMessage)
      });

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          vm.uid = user.uid;
          console.log(user.uid)

        } else {
          console.log('signed out')
        }
      });
    }
  }
</script>
