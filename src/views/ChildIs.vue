<template>
  <dive class="container mt-5">
    <div class="columns is-centered">
      <div class="column is-half">
        <p class="mt-4 ml-1 is-size-3 has-text-centered">
          طفلك هو ؟
        </p>
        <div class="columns mt-3 is-mobile">
          <div
            class="column"
          >
            <figure class="image is-128x128  ml-auto">
              <img

                src="@/assets/image boy.svg"
                @click="show"
              >
              <figure class="image is-48x48">
                <img
                  id="imID"
                  src="@/assets/crrect.svg"
                >
              </figure>
            </figure>
          </div>
          <div class="column">
            <figure class="image is-128x128 mr-auto">
              <img

                src="@/assets/image girl.svg"
                @click="show1"
              >
              <figure class="image is-48x48">
                <img
                  id="imeID"
                  src="@/assets/crrect.svg"
                >
              </figure>
            </figure>
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
<script>
export default {
  methods: {
    show: function () {
      document.getElementById('imeID')
        .style.display = 'none'

      document.getElementById('imID')
        .style.display = 'block'
    },
    show1: function () {
      document.getElementById('imID')
        .style.display = 'none'

      document.getElementById('imeID')
        .style.display = 'block'
    },

  },

}
</script>

 <style>
 .container
{
  width: 750px;
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
#imID,#imeID
{
  position:absolute;

   left: 10px;
   bottom: 130px;
    z-index: 3;
  display: none;
}

</style>
