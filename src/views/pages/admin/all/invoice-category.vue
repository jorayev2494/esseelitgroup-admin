<template>
  <div class="main-wrapper">
    <layout-headeradmin></layout-headeradmin>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="page-title">Items</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/admin/index">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Items List</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Page Header -->

        <div class="card invoices-tabs-card">
          <div class="card-body card-body pt-0 pb-0">
            <div class="invoices-items-main-tabs">
              <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                  <div class="invoices-items-tabs">
                    <ul>
                      <li>
                        <router-link to="/admin/invoice-items"
                          >All Items</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/admin/invoice-category" class="active"
                          >Category</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card invoices-tabs-card">
          <div class="card-body card-body pt-0 pb-0">
            <div class="invoices-main-tabs border-0 pb-0">
              <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                  <div class="invoices-settings-btn invoices-settings-btn-one">
                    <a
                      href="#"
                      class="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#add_items"
                    >
                      <i data-feather="plus-circle"></i> Add New Item
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-stripped table-hover datatable">
                    <thead class="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Added</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <a href="#" class="invoice-link"
                            >GoMechanic Neutron 600...</a
                          >
                        </td>
                        <td class="items-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </td>
                        <td>16 Mar 2022</td>
                        <td class="text-end">
                          <router-link
                            to="/admin/edit-invoice"
                            class="btn btn-sm btn-white text-success me-2"
                            ><i class="far fa-edit me-1"></i> Edit</router-link
                          >
                          <a
                            class="btn btn-sm btn-white text-danger"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_paid"
                            ><i class="far fa-trash-alt me-1"></i>Delete</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <a href="#" class="invoice-link"
                            >Car Wash Shampoo 250ml...</a
                          >
                        </td>
                        <td class="items-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </td>
                        <td>14 Mar 2022</td>
                        <td class="text-end">
                          <router-link
                            to="/admin/edit-invoice"
                            class="btn btn-sm btn-white text-success me-2"
                            ><i class="far fa-edit me-1"></i> Edit</router-link
                          >
                          <a
                            class="btn btn-sm btn-white text-danger"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_paid"
                            ><i class="far fa-trash-alt me-1"></i>Delete</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <a href="#" class="invoice-link"
                            >Bosch 1300W High Pressure...</a
                          >
                        </td>
                        <td class="items-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </td>
                        <td>7 Mar 2022</td>
                        <td class="text-end">
                          <router-link
                            to="/admin/edit-invoice"
                            class="btn btn-sm btn-white text-success me-2"
                            ><i class="far fa-edit me-1"></i> Edit</router-link
                          >
                          <a
                            class="btn btn-sm btn-white text-danger"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_paid"
                            ><i class="far fa-trash-alt me-1"></i>Delete</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <a href="#" class="invoice-link"
                            >Clear Coat Spray -Quick Dr...9</a
                          >
                        </td>
                        <td class="items-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </td>
                        <td>24 Mar 2022</td>
                        <td class="text-end">
                          <router-link
                            to="/admin/edit-invoice"
                            class="btn btn-sm btn-white text-success me-2"
                            ><i class="far fa-edit me-1"></i> Edit</router-link
                          >
                          <a
                            class="btn btn-sm btn-white text-danger"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_paid"
                            ><i class="far fa-trash-alt me-1"></i>Delete</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label class="custom_check">
                            <input type="checkbox" name="invoice" />
                            <span class="checkmark"></span>
                          </label>
                          <a href="#" class="invoice-link"
                            >Aquatak High Pressure Wash.</a
                          >
                        </td>
                        <td class="items-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </td>
                        <td>17 Mar 2022</td>
                        <td class="text-end">
                          <router-link
                            to="/admin/edit-invoice"
                            class="btn btn-sm btn-white text-success me-2"
                            ><i class="far fa-edit me-1"></i> Edit</router-link
                          >
                          <a
                            class="btn btn-sm btn-white text-danger"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_paid"
                            ><i class="far fa-trash-alt me-1"></i>Delete</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->

    <!-- Add Invoices Items Modal -->
    <div
      class="modal custom-modal fade bank-details"
      id="add_items"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <div class="form-header text-start mb-0">
              <h4 class="mb-0">Create New Category</h4>
            </div>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="bank-inner-details">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label>Category Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Add New Item"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label>Category Description</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="bank-details-btn">
              <a
                href="javascript:void(0);"
                data-bs-dismiss="modal"
                class="btn bank-cancel-btn me-2"
                >Cancel</a
              >
              <a href="javascript:void(0);" class="btn bank-save-btn"
                >Save Item</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Items Modal -->

    <!-- Delete Paid Modal -->
    <div class="modal custom-modal fade" id="delete_paid" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="form-header">
              <h3>Delete Invoice Iems</h3>
              <p>Are you sure want to delete?</p>
            </div>
            <div class="modal-btn delete-action">
              <div class="row">
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary paid-continue-btn w-100"
                    >Delete</a
                  >
                </div>
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-primary paid-cancel-btn w-100"
                    >Cancel</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Delete Paid Modal -->
  </div>
</template>
