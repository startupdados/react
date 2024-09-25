import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Material-UI imports
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Terceiros
import * as Yup from 'yup';
import { Formik } from 'formik';
import InputMask from 'react-input-mask';
import imageCompression from 'browser-image-compression';

// Importações do projeto
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// Serviços
import userService from 'services/userService';

// Ícones
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// Importações para o DatePicker
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AuthRegister = ({ ...others }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Cadastre-se com seu Email</Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          fname: '',
          lname: '',
          email: '',
          password: '',
          phone: '',
          birthDate: null,
          // photo: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          fname: Yup.string().max(255).required('Nome é obrigatório'),
          lname: Yup.string().max(255).required('Sobrenome é obrigatório'),
          email: Yup.string().email('Email inválido').max(255).required('Email é obrigatório'),
          password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
          phone: Yup.string().required('Telefone é obrigatório'),
          birthDate: Yup.date().nullable().required('Data de nascimento é obrigatória'),
          // photo: Yup.string().required('Foto é obrigatória')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            // Converte a string da data no formato DD/MM/AAAA para um objeto Date
            const [day, month, year] = values.birthDate.split('/');
            const formattedDate = new Date(`${year}-${month}-${day}`);
            
            // Preparar dados para envio
            const data = {
              firstName: values.fname,
              lastName: values.lname,
              email: values.email,
              password: values.password,
              phone: values.phone,
              birthDate: formattedDate.toISOString().split('T')[0], // Formata a data para 'YYYY-MM-DD'
              // photo: values.photo, // Já é uma string Base64
            };
        
            await userService.createUser(data);
            setStatus({ success: true });
            setSubmitting(false);
            navigate('/login'); // Redireciona após cadastro bem-sucedido
          } catch (error) {
            console.error(error);
            setStatus({ success: false });
            setErrors({ submit: error.message });
            setSnackbarMessage(error.message || 'Falha ao realizar cadastro');
            setSnackbarOpen(true);
            setSubmitting(false);
          }
        }}
        
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          setFieldValue, // Necessário para atualizar campos personalizados
        }) => {
          // Atualiza o indicador de força da senha
          useEffect(() => {
            changePassword(values.password);
          }, [values.password]);

          return (
            <form noValidate onSubmit={handleSubmit} {...others}>
              <Grid container spacing={matchDownSM ? 0 : 2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome"
                    margin="normal"
                    name="fname"
                    type="text"
                    value={values.fname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.fname && errors.fname)}
                    helperText={touched.fname && errors.fname}
                    sx={{ ...theme.typography.customInput }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Sobrenome"
                    margin="normal"
                    name="lname"
                    type="text"
                    value={values.lname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.lname && errors.lname)}
                    helperText={touched.lname && errors.lname}
                    sx={{ ...theme.typography.customInput }}
                  />
                </Grid>
              </Grid>

              <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email-register">Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-register"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Email"
                />
                {touched.email && errors.email && (
                  <FormHelperText error id="standard-weight-helper-text-email-register">
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-password-register">Senha</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-register"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  label="Senha"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="alternar visibilidade da senha"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-register">
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>

              {/* Campo de Telefone com Máscara */}
              <FormControl fullWidth error={Boolean(touched.phone && errors.phone)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="phone" >
                  Telefone
                </InputLabel>
                <InputMask
                  mask="+55 (99) 99999-9999"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {() => (
                    <OutlinedInput
                      id="phone"
                      type="text"
                      name="phone"
                      label="Telefone"
                    />
                  )}
                </InputMask>
                {touched.phone && errors.phone && (
                  <FormHelperText error id="phone-error">
                    {errors.phone}
                  </FormHelperText>
                )}
              </FormControl>

              {/* Campo de Data de Nascimento */}

              <FormControl fullWidth error={Boolean(touched.birthDate && errors.birthDate)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-birthDate">Data de Nascimento</InputLabel>
                <InputMask
                  mask="99/99/9999" // Máscara para DD/MM/AAAA
                  value={values.birthDate}
                  onChange={(event) => setFieldValue('birthDate', event.target.value)}
                >
                  {() => (
                    <OutlinedInput
                      id="outlined-adornment-birthDate"
                      type="text"
                      name="birthDate"
                      label="Data de Nascimento"
                    />
                  )}
                </InputMask>
                {touched.birthDate && errors.birthDate && (
                  <FormHelperText error id="birthDate-error">
                    {errors.birthDate}
                  </FormHelperText>
                )}
              </FormControl>


              {/* Campo de Upload de Foto */}
              {/* <FormControl
                fullWidth
                error={Boolean(touched.photo && errors.photo)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="photo" shrink>
                  Foto
                </InputLabel>
                <OutlinedInput
                  id="photo"
                  type="file"
                  name="photo"
                  onBlur={handleBlur}
                  onChange={async (event) => {
                    const file = event.currentTarget.files[0];
                    if (file) {
                      try {
                        // Opções para compressão
                        const options = {
                          maxSizeMB: 20, // Tamanho máximo em MB
                          useWebWorker: true,
                        };
                        // Comprime a imagem
                        const compressedFile = await imageCompression(file, options);

                        // Converte a imagem comprimida para Base64
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setFieldValue('photo', reader.result);
                        };
                        reader.readAsDataURL(compressedFile);
                      } catch (error) {
                        console.error('Erro ao comprimir a imagem:', error);
                        setSnackbarMessage('Erro ao processar a imagem. Por favor, tente outra imagem.');
                        setSnackbarOpen(true);
                      }
                    }
                  }}
                  label="Foto"
                  inputProps={{ accept: 'image/*' }}
                />
                {touched.photo && errors.photo && (
                  <FormHelperText error id="photo-error">
                    {errors.photo}
                  </FormHelperText>
                )}
              </FormControl> */}

              {/* Pré-visualização da imagem */}
              {values.photo && (
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={values.photo}
                    alt="Pré-visualização da foto"
                    style={{ maxWidth: '100%', maxHeight: 200 }}
                  />
                </Box>
              )}
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="subtitle1">
                        Concordo com os &nbsp;
                        <Typography variant="subtitle1" component={Link} to="#">
                          Termos & Condições.
                        </Typography>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>

              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}

              <Box sx={{ mt: 2 }}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Cadastrar
                  </Button>
                </AnimateButton>
              </Box>
            </form>
          );
        }}
      </Formik>

      {/* Snackbar para mensagens de erro */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AuthRegister;
