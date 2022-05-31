<template>
  <dive class="container mt-5">
    <div class="columns is-centered">
      <div class="column is-half">
        <p class="mt-4 ml-3 is-size-3 has-text-centered">
          اختر صورة لطفلك
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
        <div class="columns mt-3 is-centered is-mobile">
          <div class="column is-half">
            <button class="button is-info is-rounded">
              <p class="but">
                التالي
              </p>
            </button>
          </div>
        </div>
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
.button.is-info.is-rounded{
  width: 50%;
  text-align: center;
  margin-right: 25%;
margin-top: 8%;
  color:white;

  background-color: #6FA3D2;

}
.but{
    font-size: 30px;
}

</style>
