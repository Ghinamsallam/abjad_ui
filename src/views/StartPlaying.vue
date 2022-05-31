<template>
  <dive class="container mt-5">
    <div class="columns is-centered is-mobile">
      <div class="column is-half">
        <p class="mt-4 is-size-4 has-text-centered">
          لقد تم إنشاء حسابك بنجاح
        </p>
        <div class="column">
          <figure class="image is-24x24 mx-auto">
            <img
              id="correctgreen"

              src="@/assets/correct green.svg"
            >
          </figure>
        </div>

        <div class="columns mt-3 is-centered is-mobile">
          <div class="column is-half">
            <button class="button is-info is-rounded">
              <p class="but">
                ابدأ اللعب
              </p>
            </button>
          </div>
        </div>

        <div class="columns mt-3 is-centered is-mobile is-align-self-center">
          <div class="column is-half ">
            <figure class="image is-128x128 ml-auto mr-auto">
              <img

                src="@/assets/binkun.svg"
              >
            </figure>
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
  width: 50%;
  text-align: center;
  margin-right: 25%;
margin-top: 11%;
  color:white;

  background-color: #6FA3D2;

}
.but{
    font-size: 30px;
}
#correctgreen{
    position: absolute;
    top: -49px;
    left: -170px;
}

</style>
