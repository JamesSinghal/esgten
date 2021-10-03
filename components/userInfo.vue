<template>
    <ul class="profileMenu">
       <li>
           <div class="profile"> 
               <ul class="menu">
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">Change Password</a></li>
                    <li><a href="#">Log out</a></li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: "sideBar",
};
</script>

<style>

#settings {
    padding-right: 1.5vw;
    text-align: right;
}

.side-bar {
    width: 12vw;
    height: 100vh;
    position: fixed;
}

#logo {
    height: 75%;
    width: 75%;
    display: block;
    margin: auto;
    margin-top:2vh;
    margin-bottom:1vh;
}

.flex-col > li > div {
    width: 12vw;
    padding-top: .4vh;
    padding-bottom: .4vh;
    padding-left: auto;
    padding-right: auto;
    font-size: 18px;
    margin-right: 0;
    font-weight: 600;
}

.flex-col > li > div > a {
    padding-right: 1.5vw;
    padding-top: .8vh;
    padding-bottom: .8vh;
    width: 12vw;
    height: 100%;
}

.flex-col > li{
    width: 100%;
    text-align: right;
    z-index: 2;
}

#side-list {
    height: 60vh;
    margin-top: 25vh;
}
</style>