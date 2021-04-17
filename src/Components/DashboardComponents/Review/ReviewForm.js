import React from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const ReviewForm = ({ handleUploadImage, onSubmit }) => {
	const { register, handleSubmit } = useForm();

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Row>
					<Form.Group
						as={Col}
						controlId="formGridEmail"
					>
						<Form.Label> Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Your Name"
							name="name"
							ref={register({
								required: true,
							})}
						/>
					</Form.Group>
					<Form.Group
						as={Col}
						controlId="formGridEmail"
					>
						<Form.Label> Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Your Email"
							name="email"
							ref={register({
								required: true,
							})}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Your Image</Form.Label>
						<Form.File custom>
							<Form.File.Input
								isValid
								onChange={(event) =>
									handleUploadImage(
										event
									)
								}
							/>
							<Form.File.Label data-browse="Add Image">
								Choose Image
							</Form.File.Label>
						</Form.File>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>
									Comment
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								as="textarea"
								aria-label="With textarea"
								name="comment"
								ref={register({
									required: true,
								})}
							/>
						</InputGroup>
					</Form.Group>
				</Form.Row>
				<button class="submitButton">
					Submit
					<div class="SubmitButton__horizontal"></div>
					<div class="submitButton__vertical"></div>
				</button>
			</form>
		</div>
	);
};

export default ReviewForm;
