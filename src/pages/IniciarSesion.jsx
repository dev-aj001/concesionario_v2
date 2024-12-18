import React from "react";
import { Form, Input, Select, SelectItem, Checkbox, Button } from "@nextui-org/react";
import Layout from "../layout";

export default function IniciarSesion() {
    const [password, setPassword] = React.useState("");
    const [submitted, setSubmitted] = React.useState(null);
    const [errors, setErrors] = React.useState({});

    // Real-time password validation
    const getPasswordError = (value) => {
        if (value.length < 4) {
            return "Password must be 4 characters or more";
        }
        if ((value.match(/[A-Z]/g) || []).length < 1) {
            return "Password needs at least 1 uppercase letter";
        }
        if ((value.match(/[^a-z]/gi) || []).length < 1) {
            return "Password needs at least 1 symbol";
        }

        return null;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Custom validation checks
        const newErrors = {};

        // Password validation
        const passwordError = getPasswordError(data.password);

        if (passwordError) {
            newErrors.password = passwordError;
        }

        // Username validation
        if (data.name === "admin") {
            newErrors.name = "Nice try! Choose a different username";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            return;
        }

        if (data.terms !== "true") {
            setErrors({ terms: "Please accept the terms" });

            return;
        }

        // Clear errors and submit
        setErrors({});
        setSubmitted(data);
    };

    return (
        <Layout>
            <Form
                className="w-full justify-center items-center h-screen-navbar space-y-4"
                validationBehavior="native"
                validationErrors={errors}
                onReset={() => setSubmitted(null)}
                onSubmit={onSubmit}
            >
                <div className="flex flex-col gap-4 max-w-md">
                    

                    <Input
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return "Por favor ingrese su correo";
                            }
                            if (validationDetails.typeMismatch) {
                                return "Por favor ingrese un correo valido";
                            }
                        }}
                        label="Correo electrónico"
                        labelPlacement="outside"
                        name="email"
                        placeholder="Escriba su correo"
                        type="email"
                    />

                    <Input
                        isRequired
                        errorMessage={getPasswordError(password)}
                        isInvalid={getPasswordError(password) !== null}
                        label="Contraseña"
                        labelPlacement="outside"
                        name="password"
                        placeholder="Escriba su contraseña"
                        type="password"
                        value={password}
                        onValueChange={setPassword}
                    />


                    {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

                    <div className="flex gap-4">
                        <Button className="w-full" color="primary" type="submit">
                            Ingresar
                        </Button>
                        <Button type="reset" variant="bordered">
                            Regresar
                        </Button>
                    </div>
                </div>

                {submitted && (
                    <div className="text-small text-default-500 mt-4">
                        Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
                    </div>
                )}
            </Form>
        </Layout>
    );
}

