<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <p>
          لننشئ حساب لك و لطفلك و لتحصل على تحليلات أداء طفلك <br>يرجى ادخال البريد الالكتروني
        </p>
        <div class="container">
          <div class="columns">
            <div
              class="column is-8"
            >
              <div
                class="field"
              >
                <p class="form">
                  البريد الالكتروني
                </p>
                <input
                  class="input"
                  dir="ltr"
                  type="email"
                  placeholder="example@gmail.com"
                >
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <p class="form2">
                  كلمة المرور
                </p>
                <input
                  class="input"
                  dir="ltr"
                  type="password"
                  placeholder="*******"
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
  </div>
</template>
<style>
.container{
  width: 955px;

}
p{
margin-top: 4%;
    text-align: center;
    font-size: 38px;
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
