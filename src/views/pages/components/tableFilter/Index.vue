<template>
  <div class="card">
    <div class="card-body pb-0">
      <div class="row">
        <div class="col-md-12">
          <!-- <h2>Filters</h2> -->
          <ul class="app-listing">

            <!-- <pre>{{ filters }}</pre> -->

            <li v-for="(filter, fIdx) of filters" :key="fIdx">
              <div class="multipleSelection">
                <div class="selectBox" v-on:click="toggleVisibleSelectBox(filter, fIdx)">
                  <p class="mb-0">
                    <i v-if="filter.icon" class="fas me-1 select-icon" :class="filter.icon"></i>
                    {{ $t(filter.label) }}
                  </p>
                  <span class="down-icon">
                    <i class="fas" :class="filter.visibleSelectBox ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                  </span>
                </div>

                <div id="checkBoxes" v-bind:style="[
                    filter.visibleSelectBox ? { display: 'block' } : { display: 'none' },
                  ]"
                >
                  <form action="javascript:;">

                    <template v-if="filter.searchable">
                      <p class="checkbox-title">{{ $t(filter.searchLabel) }}</p>
                      <div class="form-custom">
                        <input type="text" class="form-control bg-grey" :placeholder="$t(filter.searchLabel)" />
                      </div>
                    </template>

                    <div class="selectBox-cont">

                      <template v-if="filter.type === 'checkbox'">
                        <label
                          v-for="(item, idx) of filter.items" :key="idx"
                          class="custom_check w-100"
                        >
                          <input type="checkbox" :value="item[filter.valueKey]" v-model="filter.value" />
                          <span class="checkmark"></span>
                          <span class="text-black">{{ $_.get(item, filter.labelKey) }}</span>
                        </label>
                      </template>

                      <template v-if="filter.type === 'group-checkbox'">
                        <template v-for="(item, idx) of filter.items" :key="item[filter.valueKey]">
                          <!-- Group Header -->
                          <label class="custom_check w-100 bg-primary text-white rounded py-1" @click.prevent="changeGroup(filter, idx)">
                            <input type="checkbox" v-model="item.selected" class="m-1" />
                            <span class="checkmark m-1"></span>
                            <span class="text-black">{{ $_.get(item, filter.labelKey) }}</span>
                          </label>
                          <!-- End Group Header -->

                          <div class="selectBox-cont ms-1">
                            <label
                              v-for="(gItem, gIdx) of item.items" :key="gItem[filter.valueKey]"
                              class="custom_check w-100"
                              @click.prevent="changeValue(filter, gItem, item, gIdx)"
                            >
                              <input type="checkbox" :checked="filter.value.includes(gItem[filter.valueKey])" />
                              <span class="checkmark"></span>
                              {{ $_.get(gItem, filter.labelKey) }}
                            </label>
                          </div>
                        </template>
                      </template>

                      <!-- <label class="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span class="checkmark"></span>
                        Russell Copeland
                      </label> -->

                    </div>
                    <!-- <button type="submit" class="btn w-100 btn-primary">
                      Apply
                    </button> -->
                    <button
                      type="submit"
                      class="btn w-100 btn-primary btn-sm"
                      :disabled="!filter.value?.length"
                      @click.prevent="clearFilter(filter)"
                    >
                      {{ $t('system.clear') }}
                    </button>
                  </form>
                </div>
                <div v-if="filter.value?.length" class="text-muted mt-2">{{ filter.value?.length }} Please provide a valid state.</div>
              </div>
            </li>

            <!-- <li>
              <div class="multipleSelection">
                <div class="selectBox" v-on:click="isHiddendate = !isHiddendate">
                  <p class="mb-0">
                    <i class="fas fa-calendar me-1 select-icon"></i>
                    Select Date
                  </p>
                  <span class="down-icon">
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </div>
                <div id="checkBoxes" v-bind:style="[
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
                            <a href="javascript:void(0);" class="btn date-btn">Today</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn">Yesterday</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn">Last 7 days</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn">This month</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="btn date-btn">Last month</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </li> -->

            <!-- <li>
              <div class="multipleSelection">
                <div
                  class="selectBox"
                  v-on:click="isHiddenstatus = !isHiddenstatus"
                >
                  <p class="mb-0">
                    <i class="fas fa-book-open me-1 select-icon"></i>
                    Select Status
                  </p>
                  <span class="down-icon">
                    <i class="fas fa-chevron-down"></i>
                  </span>
                </div>
                <div id="checkBoxes" v-bind:style="[
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
                        <span class="checkmark"></span>
                        All Invoices
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span>
                        Paid
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span>
                        Overdue
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span>
                        Draft
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span>
                        Recurring
                      </label>
                      <label class="custom_check w-100">
                        <input type="checkbox" name="name" />
                        <span class="checkmark"></span>
                        Cancelled
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
            </li> -->

            <li>
              <div class="row">
                <div class="report-btn w-50 pe-2">
                  <a href="javascript:void(0);" class="btn" @click="filterHandler">
                    Filter
                  </a>
                </div>

                <div class="report-btn w-50 ps-2">
                  <a href="javascript:void(0);" class="btn" @click.prevent="clear">
                    Clear
                  </a>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- /Report Filter -->
</template>

<script setup>
  import { defineProps, defineEmits } from "vue";
  import useBehavior from './useBehavior'

  const props = defineProps({
    filters: {
      type: Array,
      required: true,
    },
  })

  const emits = defineEmits({
    filter: () => true,
  })

  const {
    startdate,
    startdateOne,
    dateFormat,
    isHiddenuser,
    isHiddendate,
    isHiddenstatus,
    isHiddencategory,

    filters,

    changeValue,
    changeGroup,
    toggleVisibleSelectBox,
    filterHandler,
    clearFilter,
    clear,
  } = useBehavior({ props, emits })

</script>

<style scoped>
  .card-body {
    padding: 1.0rem;
  }

  .multipleSelection .selectBox, .SortBy .selectBoxes {
    position: relative;
    background: #fff;
    width: 100%;
    padding: 4px 8px;
    font-weight: 400;
    background: #FFFFFF;
    border: 1px solid #0f271a;
    border-radius: 7px;
    display: flex;
    display: -ms-flexbox;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .report-btn .btn {
    font-weight: 600;
    color: #0f271a;
    background: #FFFFFF;
    border: 2px solid #0f271a;
    border-radius: 8px;
    width: 100%;
    padding: 2px 0;
  }

  .selectBox-cont {
    height: auto;
    max-height: 220px;
    overflow-y: auto;
    padding-right: 5px;
}
</style>

