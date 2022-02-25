<template>
  <v-row align="start" class="row--35">
    <v-col lg="6" md="6" sm="12" cols="12" order="2" order-md="1">
      <div class="section-title text-left mb--50 mb_sm--30 mb_md--30">
        <h2 class="heading-title">Contact Us.</h2>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          cupiditate aperiam neque
        </p>
      </div>
      <div class="form-wrapper">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              name="name"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  v-model="formData.name"
                  placeholder="Your Name *"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              name="email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  rules="required|email"
                  v-model="formData.email"
                  placeholder="Your email *"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              name="subject"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  v-model="formData.subject"
                  placeholder="Write a Subject"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              name="message"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <textarea
                  v-model="formData.message"
                  placeholder="Your Message"
                ></textarea>
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <button
              class="rn-button-style--2 btn_solid"
              type="submit"
              value="submit"
            >
              Submit
            </button>
          </form>
        </ValidationObserver>
      </div>
    </v-col>
    <v-col lg="6" md="6" sm="12" cols="12" order="1" order-md="2">
      <div class="thumbnail mb_md--40 mb_sm--40">
        <!-- <img src="../../assets/images/about/about-6.jpg" alt="trydo" /> -->
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import { ValidationObserver } from "vee-validate";
  import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
  export default {
    components: {
      ValidationObserver,
      ValidationProvider,
    },
    data() {
      return {
        formData: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      onSubmit() {
        console.log(this.formData);
      },
    },
  };
</script>
