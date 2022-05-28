<template>
  <div class="container mt-5">
    <div class="columns is-centered">
      <div class="column is-half">
        <p class="mt-6 ml-5 is-size-3 has-text-centered">
          مواليد طفلك ؟
        </p>

        <input
          class="is-size-3 mt-5"
          type="date"
        >

        <div class="columns is-centered">
          <div class="column is-half">
            <button class="button is-rounded is-centered mt-6">
              <p>
                التالي
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
 .container
{
  width: 750px;
}
input{
  border-radius: 3%;
background-color: #E4F5FF;
  border:none

}

.button {
  width: 80%;
  text-align: center;

  margin-top: 5%;
  color:white;
background-color: #6FA3D2;
}
</style>
