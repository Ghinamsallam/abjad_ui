<template>
  <dive class="container mt-5">
    <div class="columns is-centered">
      <div class="column is-half">
        <p class="mt-4 ml-5 is-size-3 has-text-centered">
          ما هو اسم طفلك ؟
        </p>
        <div class="columns mt-3 is-centered">
          <div
            class="column is-half"
          >
            <figure class="image is-128x128  ml-auto mr-auto">
              <img

                src="@/assets/image boy.svg"
              >
            </figure>
            <div class="columns mt-3 is-centered">
              <div
                class="column is-half"
              >
                <input
                  class="input is-fullwidth"
                  type="text"
                >
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
      </div>
    </div>
  </dive>
</template>
<style>
 .container
{
  width: 750px;
}
.button.is-info.is-rounded{
  width: 90%;
  text-align: center;
  margin-right: 7%;
margin-top: 10%;
  color:white;

  background-color: #6FA3D2;

}
.but{
    font-size: 30px;
}

</style>
