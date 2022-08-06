<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <p class="mt-4 ml-1 is-size-3 has-text-centered">
          أطفالي
        </p>
      </div>
    </div>
    <div class="columns mt-4">
      <div class="column">
        <img

          src="@/assets/reem.svg"
        >
      </div>
      <div class="column">
        <img

          src="@/assets/samer.svg"
        >
      </div>
    </div>
    <button class="button is-info is-rounded">
      <p class="but">
        إضافة طفل
      </p>
    </button>
  </div>
</template>
<style>
.container{
  width: 955px;

}
.button.is-info.is-rounded{
  width: 20%;
  text-align: center;
  margin-right: 40%;
margin-top: 8%;
  color:white;

  background-color: #6FA3D2;

}
.but{
    font-size: 30px;
}
.has-text-centered{
    color: #6FA3D2;
}
</style>
