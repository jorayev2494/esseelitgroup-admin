<template>
  <div class="card report-card">
    <div class="card-body pb-0">
      <div class="row">
        <div class="col-md-12">
          <ul class="app-listing">
            <li>
              <div class="multipleSelection">
                <div
                  class="selectBox"
                  v-on:click="isHiddenuser = !isHiddenuser"
                >
                  <p class="mb-0">
                    <i class="fas fa-user-plus me-1 select-icon"></i>
                    Select User
                  </p>
                  <span class="down-icon"
                    ><i class="fas fa-chevron-down"></i
                  ></span>
                </div>
                <div
                  id="checkBoxes"
                  v-bind:style="[
                    !isHiddenuser ? { display: 'block' } : { display: 'none' },
                  ]"
                >
                  <form action="javascript:;">
                    <p class="checkbox-title">Customer Search</p>
                    <div class="form-custom">
                      <input
                        type="text"
                        class="form-control bg-grey"
                        placeholder="Enter Customer Name"
                      />
                    </div>
                    <div class="selectBox-cont">
                      <label class="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span class="checkmark"></span> Brian Johnson
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span class="checkmark"></span> Russell Copeland
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span class="checkmark"></span> Greg Lynch
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span class="checkmark"></span> John Blair
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span class="checkmark"></span> Barbara Moore
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span class="checkmark"></span> Hendry Evan
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span class="checkmark"></span> Richard Miles
                      </label>
                    </div>
                    <button type="submit" class="btn w-100 btn-primary">
                      Apply
                    </button>
                    <button type="reset" class="btn w-100 btn-grey">
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </li>
            <li>
              <div class="multipleSelection">
                <div
                  class="selectBox"
                  v-on:click="isHiddendate = !isHiddendate"
                >
                  <p class="mb-0">
                    <i class="fas fa-calendar me-1 select-icon"></i>
                    Select Date
                  </p>
                  <span class="down-icon"
                    ><i class="fas fa-chevron-down"></i
                  ></span>
                </div>
                <div
                  id="checkBoxes"
                  v-bind:style="[
                    !isHiddendate ? { display: 'block' } : { display: 'none' },
                  ]"
                >
                  <form action="javascript:;">
                    <p class="checkbox-title">Date Filter</p>
                    <div class="selectBox-cont selectBox-cont-one h-auto">
                      <div class="date-picker">
                        <div class="form-custom cal-icon">
                          <datepicker
                            v-model="startdate"
                            class="form-control picker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                      </div>
                      <div class="date-picker pe-0">
                        <div class="form-custom cal-icon">
                          <datepicker
                            v-model="startdateOne"
                            class="form-control picker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                      </div>
                      <div class="date-list">
                        <ul>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn"
                              >Today</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn"
                              >Yesterday</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn"
                              >Last 7 days</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn"
                              >This month</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn"
                              >Last month</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </li>
            <li>
              <div class="multipleSelection">
                <div
                  class="selectBox"
                  v-on:click="isHiddenstatus = !isHiddenstatus"
                >
                  <p class="mb-0">
                    <i class="fas fa-book-open me-1 select-icon"></i>
                    Select Status
                  </p>
                  <span class="down-icon"
                    ><i class="fas fa-chevron-down"></i
                  ></span>
                </div>
                <div
                  id="checkBoxes"
                  v-bind:style="[
                    !isHiddenstatus
                      ? { display: 'block' }
                      : { display: 'none' },
                  ]"
                >
                  <form action="javascript:;">
                    <p class="checkbox-title">By Status</p>
                    <div class="selectBox-cont">
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" checked />
                        <span class="checkmark"></span> All Invoices
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span> Paid
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span> Overdue
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span> Draft
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span> Recurring
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span> Cancelled
                      </label>
                    </div>
                    <button type="submit" class="btn w-100 btn-primary">
                      Apply
                    </button>
                    <button type="reset" class="btn w-100 btn-grey">
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </li>
            <li>
              <div class="multipleSelection">
                <div
                  class="selectBox"
                  v-on:click="isHiddencategory = !isHiddencategory"
                >
                  <p class="mb-0">
                    <i class="fas fa-bookmark me-1 select-icon"></i> By Category
                  </p>
                  <span class="down-icon"
                    ><i class="fas fa-chevron-down"></i
                  ></span>
                </div>
                <div
                  id="checkBoxes"
                  v-bind:style="[
                    !isHiddencategory
                      ? { display: 'block' }
                      : { display: 'none' },
                  ]"
                >
                  <form action="javascript:;">
                    <p class="checkbox-title">Category</p>
                    <div class="form-custom">
                      <input
                        type="text"
                        class="form-control bg-grey"
                        placeholder="Enter Category Name"
                      />
                    </div>
                    <div class="selectBox-cont">
                      <label class="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span class="checkmark"></span> Advertising
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span class="checkmark"></span> Food
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span class="checkmark"></span> Marketing
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span class="checkmark"></span> Repairs
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span class="checkmark"></span> Software
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span class="checkmark"></span> Stationary
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="category" />
                        <span class="checkmark"></span> Travel
                      </label>
                    </div>
                    <button type="submit" class="btn w-100 btn-primary">
                      Apply
                    </button>
                    <button type="reset" class="btn w-100 btn-grey">
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </li>
            <li>
              <div class="report-btn">
                <a href="javascript:void(0);" class="btn">
                  <img
                    src="@/assets/img/admin/icons/invoices-icon5.svg"
                    alt=""
                    class="me-2"
                  />
                  Generate report
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- /Report Filter -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      isHiddenuser: true,
      isHiddendate: true,
      isHiddenstatus: true,
      isHiddencategory: true,
    };
  },
};
</script>