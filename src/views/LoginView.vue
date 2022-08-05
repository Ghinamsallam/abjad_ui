<template>
  <div class="container mt-5">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="notification is-size-4">
          <p class="mt-4 is-size-5">
            تسجيل الدخول
          </p>
          <p class="mt-4 is-size-6 has-text-weight-light ">
            البريد الالكتروني
          </p>

          <input
            class="is-size-5"
            dir="ltr"
            type="email"
            placeholder="example@gmail.com"
          >
          <p class=" mt-3 is-size-6 has-text-weight-light">
            كلمة المرور
          </p>
          <input
            class="is-size-5"
            dir="ltr"
            type="password"
            placeholder="*******"
          >
          <p class="is-size-7">
            هل نسيت كلمة المرور ؟<a href="http://192.168.1.8:8081/newpassword">اضغط هنا</a>
          </p>
        </div>
        <div class="columns is-centered">
          <div class="column is-half">
            <p class="is-size-7">
              ليس لديك حساب؟<a href="http://192.168.1.111:8081/acount">انقر هنا</a>
            </p>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-half">
            <button class="button is-rounded is-centered">
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
.notification{
  border-radius: 3%;
  height: 80%;
  width: 105%;
}
input{
  border:none

}
.button {
  width: 80%;
  text-align: center;

  margin-top: 5%;
  margin-right: 8%;
  color:white;
background-color: #6FA3D2;
}

a{
  text-decoration-line: underline;
  color: black;
  font-weight: 200%;
}

</style>
