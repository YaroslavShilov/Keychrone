import path from 'path';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';

export const commonConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, '..', 'src', 'template', 'index.tsx'),

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].[contenthash:10].js',
    chunkFilename: '[name].[contenthash:10].chunk.js',
    clean: true,
  },

  plugins: [
    new ESLintWebpackPlugin(),
    new WebpackManifestPlugin({}),
    //new BundleAnalyzerPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /.s?[a|c]ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[contenthash:10][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|svg|webp)$/,
        generator: {
          filename: 'img/[contenthash:10][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
};