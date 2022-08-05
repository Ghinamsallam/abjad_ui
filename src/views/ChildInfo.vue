<template>
  <dive class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <p class="mt-4 ml-7 is-size-3 has-text-centered">
          ما هو اسم و مواليد طفلك ؟
        </p>
        <div class="columns mt-3 is-centered">
          <div class="column is-half">
            <figure class="image is-128x128  ml-auto mr-auto mt-3">
              <img
                src="@/assets/image boy.svg"
              >
              <div class="image-upload">
                <label for="file-input">
                  <img
                    class="image is-48x48"
                    src="@/assets/camera big.svg"
                  >
                </label>

                <input
                  id="file-input"

                  type="file"
                >
              </div>
            </figure>
          </div>
        </div>
        <div class="container">
          <div class="columns">
            <div
              class="column is-8"
            >
              <div
                class="field"
              >
                <p class="form">
                  الاسم
                </p>
                <input
                  class="input"
                  dir="ltr"
                  type="text"
                >
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <p class="form2">
                  المواليد
                </p>
                <input
                  class="input"
                  dir="ltr"
                  type="date"
                >
              </div>
            </div>
          </div>
        </div>
        <button class="button is-info is-rounded">
          <p class="but">
            التالي
          </p>
        </button>
      </div>
    </div>
  </dive>
</template>
<style>
 .container
{
  width: 750px;
}
.image.is-48x48
{
  position:absolute;

   left: 85px;
   bottom: 85px;
    z-index: 3;

}

.image-upload>input {
  display: none;
}
.form{
    margin-top: 60px;

    text-align: right;
    font-size: 23px;
}
.field{
    width: 280px;
    height: 55px;
    /* background-color: #E4F5FF;; */
}
.input{
    background-color: #E4F5FF;
    margin-left: 80%;

}
.form2{
  margin-top: 60px;

    text-align:right;
    font-size: 23px;
}
.button.is-info.is-rounded{
  width: 20%;
  text-align: center;
  margin-right: 40%;
margin-top: 18%;
  color:white;

  background-color: #6FA3D2;

}
.but{
    font-size: 30px;
}
</style>
