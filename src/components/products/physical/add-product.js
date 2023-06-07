import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  input,
  Label,
  Row,
  Button,
} from "reactstrap";
import one from "../../../assets/images/pro3/1.jpg";
import user from "../../../assets/images/user.png";
import MDEditor from "@uiw/react-md-editor";
import { useForm } from "react-hook-form";

const Add_product = () => {
  const [value, setValue] = useState("");
  const { register, watch, handleSubmit } = useForm();
  const [quantity, setQuantity] = useState(1);
  const [file, setFile] = useState();
  const [dummyimgs, setDummyimgs] = useState([
    { img: user },
    { img: user },
    { img: user },
    { img: user },
    { img: user },
    { img: user },
  ]);

  const onChange = (e) => {
    setValue(e);
  };

  const IncrementItem = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    } else {
      return null;
    }
  };
  const DecreaseItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      return null;
    }
  };
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const onSubmit = (data) => {
    const { markdownContent } = data;
    const jsonData = JSON.stringify(data);

    console.log(markdownContent);
    alert(jsonData);

    // You can perform further actions with the JSON data, such as sending it to an API or storing it in local storage.
  };
  console.log(watch());

  //	image upload

  const _handleImgChange = (e, i) => {
    e.preventDefault();
    let reader = new FileReader();
    const image = e.target.files[0];
    reader.onload = () => {
      dummyimgs[i].img = reader.result;
      setFile({ file: file });
      setDummyimgs(dummyimgs);
    };
    reader.readAsDataURL(image);
    console.log(image);
  };

  const handleValidSubmit = (e) => {
    e.preventDefault();
    console.log("come");
    console.log(e.target.name);
  };
  return (
    <Fragment>
      <Breadcrumb title="Add Product" parent="Physical" />

      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Add Product</h5>
              </CardHeader>
              <CardBody>
                <Row className="product-adding">
                  <Col xl="5">
                    <div className="add-product">
                      <Row>
                        <Col xl="9 xl-50" sm="6 col-9">
                          <img
                            src={one}
                            alt=""
                            className="img-fluid image_zoom_1 blur-up lazyloaded"
                          />
                        </Col>
                        <Col xl="3 xl-50" sm="6 col-3">
                          <ul className="file-upload-product">
                            {dummyimgs.map((res, i) => {
                              return (
                                <li key={i}>
                                  <div className="box-input-file">
                                    <input
                                      className="upload"
                                      type="file"
                                      onChange={(e) => _handleImgChange(e, i)}
                                      // {...register("file")}
                                    />
                                    <img
                                      alt=""
                                      src={res.img}
                                      style={{ width: 50, height: 50 }}
                                    />
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xl="7">
                    <Form
                      className="needs-validation add-product-form"
                      // onSubmit={handleValidSubmit}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form form-label-center">
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Product Name :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="product_name"
                              id="validationCustom01"
                              type="text"
                              required
                              {...register("product_name")}
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4">
                            Add Description :
                          </Label>
                          <div className="col-xl-8 col-sm-7 description-sm">
                            <MDEditor
                              {...register("markdownContent")}
                              value={value}
                              onChange={onChange}
                            />
                          </div>
                        </FormGroup>

                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Color Name :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="color"
                              id="validationCustomColorName"
                              type="text"
                              required
                              {...register("color")}
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4">Color :</Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control w-25"
                              name="product_color"
                              id="validationCustomColorName"
                              type="color"
                              required
                              {...register("color_Code")}
                            />
                          </div>
                        </FormGroup>

                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Product Code :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control "
                              name="product_code"
                              id="validationCustomUsername"
                              type="number"
                              required
                              {...register("product_code")}
                            />
                          </div>
                          <div className="invalid-feedback offset-sm-4 offset-xl-3">
                            Please choose Valid Code.
                          </div>
                        </FormGroup>
                      </div>
                      <div className="form">
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Select Size :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <select
                              name="size"
                              className="form-control digits"
                              id="exampleFormControlSelect1"
                              {...register("size")}
                            >
                              <option>Small</option>
                              <option>Medium</option>
                              <option>Large</option>
                              <option>Extra Large</option>
                            </select>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Stock :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control "
                              name="product_stock"
                              id="stock"
                              type="number"
                              required
                              {...register("stock")}
                            />
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Price :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="product_price"
                              id="validationCustom01"
                              type="number"
                              required
                              {...register("price")}
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Regular Price :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="product_regular_price"
                              id="validationCustomRegularPrice"
                              type="number"
                              required
                              {...register("regular")}
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Discount :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="product_discount"
                              id="validationDiscount"
                              type="number"
                              required
                              {...register("discount")}
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Select Categorey :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <select
                              name="category"
                              className="form-control digits"
                              id="exampleFormControlSelect_	Categorey"
                              {...register("category")}
                            >
                              <option value={"clothing"}>Clothing</option>
                              {/* <option>Medium</option>
                              <option>Large</option>
                              <option>Extra Large</option> */}
                            </select>
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Brand Name :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="Brand_Name"
                              id="brand"
                              type="text"
                              required
                              {...register("brand_name")}
                            />
                          </div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Review :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="review"
                              id="review"
                              type="textarea"
                              required
                              {...register("review")}
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Created At :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="createDate"
                              id="createDate"
                              type="datetime-local"
                              required
                              {...register("createDate")}
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Updated At :
                          </Label>
                          <div className="col-xl-8 col-sm-7">
                            <input
                              className="form-control"
                              name="updatedDate"
                              id="cUpdatedDate"
                              type="datetime-local"
                              required
                              {...register("updatedDate")}
                            />
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                        </FormGroup>
                        {/* <FormGroup className="form-group mb-3 row">
                          <Label className="col-xl-3 col-sm-4 mb-0">
                            Total Products :
                          </Label>
                          <fieldset className="qty-box ms-0">
                            <div className="input-group bootstrap-touchspin">
                              <div className="input-group-prepend">
                                <Button
                                  className="btn btn-primary btn-square bootstrap-touchspin-down"
                                  type="button"
                                  onClick={DecreaseItem}
                                >
                                  <i className="fa fa-minus"></i>
                                </Button>
                              </div>
                              <div className="input-group-prepend">
                                <span className="input-group-text bootstrap-touchspin-prefix"></span>
                              </div>
                              <input
                                className="touchspin form-control"
                                type="text"
                                value={quantity}
                                onChange={handleChange}
                              />
                              <div className="input-group-append">
                                <span className="input-group-text bootstrap-touchspin-postfix"></span>
                              </div>
                              <div className="input-group-append ms-0">
                                <Button
                                  className="btn btn-primary btn-square bootstrap-touchspin-up"
                                  type="button"
                                  onClick={IncrementItem}
                                >
                                  <i className="fa fa-plus"></i>
                                </Button>
                              </div>
                            </div>
                          </fieldset>
                        </FormGroup> */}
                      </div>
                      <div className="offset-xl-3 offset-sm-4">
                        <Button type="submit" color="primary">
                          Add
                        </Button>
                        <Button type="button" color="light">
                          Discard
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Add_product;
