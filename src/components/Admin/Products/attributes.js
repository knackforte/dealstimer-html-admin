import React from 'react';
 
class Attributes extends Component{
  render()
  {
    return(
<div clasName="attributes">
<div class="content-header row">
        <div class="content-header-left col-md-6 col-xs-12 mb-1">
            <h2 class="content-header-title">Product Attributes</h2>
        </div>
        <div class="content-header-right breadcrumbs-right breadcrumbs-top col-md-6 col-xs-12">
            <div class="breadcrumb-wrapper col-xs-12">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Prodocts</a>
                    </li>
                    <li class="breadcrumb-item active">Attributes
                    </li>
                </ol>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title" id="basic-layout-form">Product Attribute list</h4>
                    <a class="heading-elements-toggle"><i class="icon-ellipsis font-medium-3"></i></a>
                    <div class="heading-elements">
                        <ul class="list-inline mb-0">
                            <li><a data-action="expand"><i class="icon-expand2"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body collapse in">
                    <div class="card-block">
                        <form class="form">
                            <div class="form-body">
                                                               <h4 class="form-section"><i class="icon-head"></i> Personal Info</h4> 
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <label for="projectinput1">Attribute Name</label>
                                            <input type="text" id="projectinput1" class="form-control" placeholder="Attribute Name" name="fname"/>
                                        </div>
                                        <div class="form-group row">

                                        </div>
                                    </div>
                                    <div class="col-md-4" style="padding-top: 26px;">
                                        <button type="button" class="btn btn-warning mr-1">
                                            <i class="icon-cross2"></i> Clear
                                        </button>
                                        <button type="submit" class="btn btn-primary">
                                            <i class="icon-check2"></i> Save
                                        </button>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table class="table mb-0">
                                                <thead class="thead-inverse">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Attribute Name</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Mark</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Jacob</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Larry</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
 
    )
  }
}

export default Attributes;
